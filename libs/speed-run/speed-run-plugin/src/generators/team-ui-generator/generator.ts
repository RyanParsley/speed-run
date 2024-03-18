import { formatFiles, Tree } from '@nx/devkit';
import {
  applicationGenerator,
  libraryGenerator,
  componentGenerator,
} from '@nx/angular/generators';
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
    minimal: true,
  });

  const features = ['user', 'note'];
  const routes = ['detail', 'edit', 'new'];

  await Promise.all(
    features.map(async (feature) => {
      await libraryGenerator(tree, {
        name: feature,
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

      routes.map(async (route) => {
        await componentGenerator(tree, {
          name: `${options.name} ${feature} ${route}`,
          directory: `libs/${options.name}/${feature}/src/lib/${options.name}-${feature}/`,
          inlineTemplate: true,
          inlineStyle: true,
          style: 'scss',
          changeDetection: 'OnPush',
        });
      });
    })
  );
  await formatFiles(tree);
}

export default teamUiGeneratorGenerator;
