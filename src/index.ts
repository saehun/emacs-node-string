import { pipeIn } from './pipeIn';

/**
 * main function
 */
(async (): Promise<void> => {
  const [, , command] = process.argv;

  const input = await pipeIn();
  const module = await import(`./commands/${command}`);
  if (module == null || typeof module.default !== 'function') {
    throw new Error(`Command not found '${command}'`);
  }

  console.log(module.default(input));
})();
