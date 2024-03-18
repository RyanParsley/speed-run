import { formatFiles, Tree } from '@nx/devkit';
import { applicationGenerator, libraryGenerator } from '@nx/angular/generators';
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
  await libraryGenerator(tree, {
    name: `note`,
    tags: `${options.name}, feature`,
    inlineTemplate: true,
    inlineStyle: true,
    routing: true,
    lazy: true,
    parent: `apps/${options.name}/src/app/app.routes.ts`,
    style: 'scss',
    changeDetection: 'OnPush',
    directory: `libs/${options.name}`,
  });
  await libraryGenerator(tree, {
    name: `user`,
    tags: `${options.name}, feature`,
    inlineTemplate: true,
    inlineStyle: true,
    routing: true,
    lazy: true,
    parent: `apps/${options.name}/src/app/app.routes.ts`,
    style: 'scss',
    changeDetection: 'OnPush',
    directory: `libs/${options.name}`,
  });

  await formatFiles(tree);
}

export default teamUiGeneratorGenerator;
