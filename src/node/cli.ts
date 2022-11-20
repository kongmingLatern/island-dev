import cac from 'cac'

const cli = cac('island').version('0.0.1').help()


cli.command('dev [root]', 'start dev serve').action(async (root: string) => {
  console.log("dev", root);
})

cli.parse()