#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import 'source-map-support/register';
import { DoikVanillaK8SStack } from '../lib/doik-vanilla-k8s-stack';

const app = new cdk.App();
new DoikVanillaK8SStack(app, 'DoikVanillaK8SStack', {
  stackName: 'myk8s'
});