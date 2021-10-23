export const data = [
  {
    id: '1',
    children: [
      {
        id: '1-1',
        children: [],
      },
      {
        id: '1-2',
        children: [
          {
            id: '1-2-3',
            children: [
              {
                id: '1-2-3-4',
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '2',
    children: [
      {
        id: '2-1',
        children: [],
      },
    ],
  },
]

export function dfs(cond, root) {
  for (const node of root) {
    if (cond(node) || dfs(cond, node.children)) {
      return node
    }
  }
  return undefined
}
