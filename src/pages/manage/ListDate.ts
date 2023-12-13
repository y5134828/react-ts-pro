import { ListDateType } from '../../types/list';

export const ListDate: ListDateType[] = [
  {
    _id: 1,
    title: '问卷1',
    count: 0,
    date: '2021-01-01',
    isCompleted: true,
    isDeleted: true,
    isStar: false,
    isPublish: true,
  },
  {
    _id: 2,
    title: '问卷2',
    count: 1,
    date: '2021-01-03',
    isCompleted: false,
    isDeleted: false,
    isStar: true,
    isPublish: false,
  },
  {
    _id: 3,
    title: '问卷3',
    count: 2,
    date: '2021-01-02',
    isCompleted: false,
    isDeleted: false,
    isStar: false,
    isPublish: false,
  },
];
