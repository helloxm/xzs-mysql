// initial state
const state = {
  user: {
    sexEnum: [{ key: 1, value: '男' }, { key: 2, value: '女' }],
    statusEnum: [{ key: 1, value: '启用' }, { key: 2, value: '禁用' }],
    levelEnum: [{ key: 1, value: 'GESP 1' }, { key: 2, value: 'GESP 2' }, { key: 3, value: 'GESP 3' }, { key: 4, value: 'GESP 4' }, { key: 5, value: 'GESP 5' }, { key: 6, value: 'GESP 6' },
      { key: 7, value: 'GESP 7' }, { key: 8, value: 'GESP 8' }, { key: 9, value: 'CSP-X' },
      { key: 10, value: 'CSP-J' }, { key: 11, value: 'CSP-S' }],
    roleEnum: [{ key: 1, value: '学生' }, { key: 2, value: '教师' }, { key: 3, value: '管理员' }],
    statusTag: [{ key: 1, value: 'success' }, { key: 2, value: 'danger' }],
    statusBtn: [{ key: 1, value: '禁用' }, { key: 2, value: '启用' }]
  },
  exam: {
    examPaper: {
      paperTypeEnum: [{ key: 1, value: '固定试卷' }, { key: 4, value: '时段试卷' }, { key: 6, value: '任务试卷' }]
    },
    question: {
      typeEnum: [{ key: 1, value: '选择题' }, { key: 2, value: '判断题' }, { key: 3, value: '填空题' }, { key: 4, value: '简答题' }, { key: 5, value: '程序阅读题' }, { key: 6, value: '程序完善题' }, { key: 7, value: '编程题' }],
        editUrlEnum: [{ key: 1, value: '/exam/question/edit/singleChoice', name: '选择题' },
          { key: 2, value: '/exam/question/edit/trueFalse', name: '判断题' },
          { key: 3, value: '/exam/question/edit/gapFilling', name: '填空题' },
          { key: 4, value: '/exam/question/edit/shortAnswer', name: '简答题' },
          { key: 5, value: '/exam/question/edit/programReading', name: '程序阅读题' },
          { key: 6, value: '/exam/question/edit/programGapFilling', name: '程序完善题' },
          { key: 7, value: '/exam/question/edit/programCoding', name: '编程题' },
        ],
      answer: {
        doRightTag: [{ key: true, value: 'success' }, { key: false, value: 'danger' }, { key: null, value: 'warning' }],
        doRightEnum: [{ key: true, value: '正确' }, { key: false, value: '错误' }, { key: null, value: '待批改' }],
        doCompletedTag: [{ key: false, value: 'info' }, { key: true, value: 'success' }]
      }
    },
    examPaperAnswer: {
      statusEnum: [{ key: 1, value: '待批改' }, { key: 2, value: '完成' }],
      statusTag: [{ key: 1, value: 'warning' }, { key: 2, value: 'success' }]
    }
  }
}

// getters
const getters = {
  enumFormat: (state) => (arrary, key) => {
    return format(arrary, key)
  }
}

// actions
const actions = {}

// mutations
const mutations = {}

const format = function (array, key) {
  for (let item of array) {
    if (item.key === key) {
      return item.value
    }
  }
  return null
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
