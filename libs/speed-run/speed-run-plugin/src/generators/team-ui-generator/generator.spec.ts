import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { teamUiGeneratorGenerator } from './generator';
import { TeamUiGeneratorGeneratorSchema } from './schema';

describe('team-ui-generator generator', () => {
  let tree: Tree;
  const options: TeamUiGeneratorGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  xit('should run successfully', async () => {
    await teamUiGeneratorGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
