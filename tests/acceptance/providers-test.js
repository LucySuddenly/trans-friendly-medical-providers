import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | providers', function(hooks) {
  setupApplicationTest(hooks);

  test('should show providers as the homepage', async function(assert){

  })
  test('should display a google maps instance', async function(assert){

  })
  test('should show a sample list of providers', async function(assert){

  })
  test('should link to show pages for each provider', async function(assert){

  })
  test('should link to an about page', async function(assert){

  })

  test('visiting /providers', async function(assert) {
    await visit('/providers');

    assert.equal(currentURL(), '/providers');
  });
});
