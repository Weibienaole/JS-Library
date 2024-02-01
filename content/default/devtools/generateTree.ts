import { IGenerateTreeListItem } from "../../../typings/devtools"

/*
<--README
<n:generateTree>
<d:根据数组生成树结构>
```javascript
<p:
@param {IGenerateTreeListItem[]} items 待转化结构 id,children,any
@param {null | number | string = null} parentId 首级id
@param {string = 'parentId'} selectVal tree关联id
@return any tree结构
>
// example:
const comments = [
  { id: 1, parentId: null },
  { id: 2, parentId: 1 },
  { id: 3, parentId: 1 },
  { id: 4, parentId: 2 },
  { id: 5, parentId: 4 }
];
generateTree(comments)
{
  id: 1,
  children: [
    {
      id: 2,
      children: [
        {
          id: 4,
          children: [
            {
              id: 5,
              children: []
            }
          ]
        }
      ]
    },
    {
      id: 3,
      children: []
    }
  ]
}
```
README-->
*/

export default function generateTree(
  items: IGenerateTreeListItem[],
  parentId: null | number | string = null,
  selectVal: string = 'parentId'
): any {
  return items
    .filter((item) => item[selectVal] === parentId)
    .map((i: IGenerateTreeListItem) => {
      return { ...i, children: generateTree(items, i.id, selectVal) }
    })
}
