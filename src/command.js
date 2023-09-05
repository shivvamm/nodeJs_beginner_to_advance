import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

yargs(hideBin(process.argv))
  .command('new <note>', 'Create a new note', yargs =>{
  return yargs.positional('note',{
    type:'string',
    description:'The content of the note to create'
  })
  }
  , (argv)=>{console.log(`Hey :${argv.note}`)})
  .option('tags', {
    alias: 't',
    type: 'strings',
    description: 'Run with verbose logging'
  })
  .demandCommand(1)
  .parse()