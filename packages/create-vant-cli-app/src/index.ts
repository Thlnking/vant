#!/usr/bin/env node

import consola from 'consola';
import { prompt } from 'enquirer';
import { ensureDir } from 'fs-extra';
import { VanGenerator } from './generator';

async function run() {
  const { name } = await prompt<{ name: string }>({
    type: 'input',
    name: 'name',
    message: 'Your package name',
  });

  try {
    await ensureDir(name);
    const generator = new VanGenerator(name);
    await generator.run();
  } catch (e) {
    consola.error(e);
  }
}

run();
