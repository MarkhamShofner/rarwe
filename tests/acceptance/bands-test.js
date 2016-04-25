import { test } from 'qunit';
import moduleForAcceptance from 'rarwe/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | bands');

test('visiting /bands', function(assert) {
  visit('/bands');

  andThen(function() {
    // assert.equal(currentURL(), '/bands');
    assert.equal(find('.band-link').length, 2, 'All band links are rendered');
    assert.equal(find('.band-linke:contains("Long Distance Calling")').length, 1, 'The other band link contains the band name');
  });
});
