import { formatFiles, Tree } from '@nx/devkit';
import { applicationGenerator } from '@nx/angular/generators';
import { TeamUiGeneratorGeneratorSchema } from './schema';

export async function teamUiGeneratorGenerator(
  tree: Tree,
  options: TeamUiGeneratorGeneratorSchema
) {
  await applicationGenerator(tree, {
    name: options.name,
    directory: `apps`,
    style: 'scss',
    inlineStyle: true,
    inlineTemplate: true,
    tags: options.name,
    routing: true,
  });

  await formatFiles(tree);
}

export default teamUiGeneratorGenerator;
