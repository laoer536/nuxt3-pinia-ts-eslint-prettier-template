import { execSync } from 'child_process'
export default function (plop) {
  plop.setActionType('addFile',  (answers) => {
    // do something
    const { fileType, fileMode, fileName } = answers
    try {
      execSync(`npx nuxi add ${fileType} ${fileName} ${fileMode === 'no-mode' ? '' : '--' + fileMode}`)
      return `成功添加文件到${process.cwd()}/${fileType}目录下`
    } catch (err) {
      throw err
    }
  })

  plop.setGenerator('add', {
    description: '添加项目文件',
    prompts: [
      {
        type: 'list',
        message: '选择一个您要添加的文件类型',
        name: 'fileType',
        choices: ['component', 'composable', 'layout', 'plugin', 'page', 'middleware', 'api'],
      },
      {
        type: 'list',
        message: '指定一个类型(用于client or server)',
        name: 'fileMode',
        choices: ['client', 'server', 'no-mode'],
        when: (res) => ['component', 'plugin'].includes(res.fileType),
      },
      {
        type: 'input',
        message: '请输入文件名称',
        name: 'fileName',
      },
    ], // array of inquirer prompts
    actions: (data) => {
      console.log(data)
      return [
        {
          type: 'addFile',
        },
      ]
    },
  })
}
