import { Button, Table } from 'antd';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useSWR from 'swr';

import MainLayout from '../layouts/MainLayout';
import fetcher from '../lib/fetcher';
import deleteSurvey from '../services/deleteSurvey';

function ListPage() {
  const { data, error, mutate } = useSWR(
    '/surveys?_sort=id&_order=desc',
    fetcher,
  );
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const columns = useMemo(
    () => [
      {
        title: '번호',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '제목',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: '생성일',
        dataIndex: 'createdAt',
        key: 'createdAt',
        render: (createdAt) => {
          const time = new Date(createdAt);
          return `${time.getFullYear()}-${
            time.getMonth() + 1
          }-${time.getDate()}`;
        },
      },
      {
        title: '액션',
        dataIndex: 'id',
        key: 'action',
        render: (id) => {
          return (
            <Button
              danger
              onClick={(e) => {
                deleteSurvey(id).then(() => mutate());
                e.stopPropagation();
                e.preventDefault();
              }}
            >
              삭제
            </Button>
          );
        },
      },
    ],
    [mutate],
  );

  if (error) {
    return 'error';
  }

  if (!data) {
    return 'loading...';
  }

  const PAGE_SIZE = 20;

  return (
    <MainLayout selectedKeys={['list']} padding={'10px 45px'}>
      <ButtonWrapper>
        <Button onClick={() => navigate(`/builder`)}>
          새로운 설문조사 생성
        </Button>
      </ButtonWrapper>
      <Table
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => navigate(`/builder/${record.id}`),
          };
        }}
        onChange={(pagination) => {
          setPage(pagination.current);
        }}
        columns={columns}
        dataSource={data.map((item) => ({ ...item, key: item.id }))}
        pagination={{
          total: data.length,
          current: page,
          pageSize: PAGE_SIZE,
        }}
      />
    </MainLayout>
  );
}

const ButtonWrapper = styled.div`
  text-align: right;
  margin-bottom: 10px;
  margin-right: 10px;
`;

export default ListPage;
