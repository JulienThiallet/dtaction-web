import { List } from './list';
import { TASKS } from './mock-task';

export const LISTS: Array<List> = [
  {Id:1, Title: 'Liste Jeanmi', UserId: 2, Tasks: TASKS.filter(t => t.ListId === 1) },
  {Id:2, Title: 'Liste xXDaRkSaSuKeXx', UserId: 1, Tasks: TASKS.filter(t => t.ListId === 2) },
  {Id:3, Title: 'Liste roguelearg', UserId: 4, Tasks: TASKS.filter(t => t.ListId === 3) }
]
