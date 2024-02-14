const GamemathList = [
  {
    id: 0,
    name: 'test math name 1',
    pctList: [88, 89, 90, 91, 92],
    pctPreset: [
      {
        id: 0,
        name: 'pc set name 1',
        pctList: [1, 3, 5]
      },
      {
        id: 1,
        name: 'pc set name 2',
        pctList: [1, 2, 3]
      },
      {
        id: 2,
        name: 'pc set name 3',
        pctList: [2, 4, 5]
      }
    ]
  },
  {
    id: 1,
    name: 'test math name 2',
    pctList: [88, 89, 90, 91, 92],
    pctPreset: [
      {
        id: 0,
        name: 'pc set name 1',
        pctList: [1, 2, 4]
      },
      {
        id: 1,
        name: 'pc set name 2',
        pctList: [1, 2, 3]
      },
      {
        id: 2,
        name: 'pc set name 3',
        pctList: [1, 2, 5]
      }
    ]
  },
  {
    id: 2,
    name: 'test math name 3',
    pctList: [88, 89, 90, 91, 92],
    pctPreset: [
      {
        id: 0,
        name: 'pc set name 1',
        pctList: [1, 3, 4]
      },
      {
        id: 1,
        name: 'pc set name 2',
        pctList: [1, 3, 5]
      },
      {
        id: 2,
        name: 'pc set name 3',
        pctList: [1, 4, 5]
      }
    ]
  },
  {
    id: 3,
    name: 'test math name 4',
    pctList: [88, 89, 90, 91, 92],
    pctPreset: [
      {
        id: 0,
        name: 'pc set name 1',
        pctList: [2, 3, 4]
      },
      {
        id: 1,
        name: 'pc set name 2',
        pctList: [2, 3, 5]
      },
      {
        id: 2,
        name: 'pc set name 3',
        pctList: [2, 4, 5]
      }
    ]
  },
  {
    id: 4,
    name: 'test math name 5',
    pctList: [88, 89, 90, 91, 92],
    pctPreset: [
      {
        id: 0,
        name: 'pc set name 1',
        pctList: [3, 4, 5]
      },
      {
        id: 1,
        name: 'pc set name 2',
        pctList: [2, 4, 5]
      },
      {
        id: 2,
        name: 'pc set name 3',
        pctList: [1, 2, 3]
      }
    ]
  }
]
  const JackpotmathList = [
    {
      id: 0,
      name: 'JP test math name 1',
      pctList: [2, 3, 4, 5,],
      pctPreset: [
        {
          id: 0,
          name: 'JP pc set name 1',
          pctList: [1, 2, 3]
        },
        {
          id: 1,
          name: 'JP pc set name 2',
          pctList: [2, 3, 4]
        }
      ]
    },
    {
      id: 1,
      name: 'JP test math name 2',
      pctList: [2, 3, 4, 5,],
      pctPreset: [
        {
          id: 0,
          name: 'JP pc set name 1',
          pctList: [1, 2, 4]
        },
        {
          id: 1,
          name: 'JP pc set name 2',
          pctList: [1, 3, 4]
        }
      ]
    }
  ]
  const gameList = [
    {
      id: 0,
      name: 'test game name 1',
      math: 0
    },
    {
      id: 1,
      name: 'test game name 2',
      math: 1
    },
    {
      id: 2,
      name: 'test game name 3',
      math: 4
    }
    ,
    {
      id: 3,
      name: 'test game name 4',
      math: 2
    }
    ,
    {
      id: 4,
      name: 'test game name 5',
      math: 1
    },
    {
      id: 5,
      name: 'test game name 6',
      math: 3
    },
    {
      id: 6,
      name: 'test game name 7',
      math: 0
    },
    {
      id: 7,
      name: 'test game name 8',
      math: 2
    },
    {
      id: 8,
      name: 'test game name 9',
      math: 4
    },
    {
      id: 9,
      name: 'test game name 10',
      math: 3
    }
  ]
  const setList = [
    {
      id: 0,
      name: 'set name 1',
      gamesInSet: [0,1,3,5,7,8]
    },
    {
      id: 1,
      name: 'set name 2',
      gamesInSet: [1,2,4,6,7,9]
    },
    {
      id: 2,
      name: 'set name 3',
      gamesInSet: [0,1,2,3,4,5],
      Jackpot: 0 
    },
    {
      id: 3,
      name: 'set name 4',
      gamesInSet: [4,5,6,7,8,9],
      Jackpot: 1 
    },
  ]
  export { GamemathList, JackpotmathList, gameList, setList };