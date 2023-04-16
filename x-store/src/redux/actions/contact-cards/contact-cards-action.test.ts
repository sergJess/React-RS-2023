import { describe, test, expect } from 'vitest';
import { setContactCard, CONTACTCARDS } from './contact-cards';
describe('contact cards return correct', () => {
  test('correct results', () => {
    const cards = setContactCard({
      name: 'Jess',
      surname: 'Rasp',
      fileUrl: 'cxnczxc',
      estimate: 'good',
      radio: 'yep',
      date: '1-1-2000',
      email: 'x@gmail.com',
    });
    expect(cards.type).toBe(CONTACTCARDS);
    expect(cards.payload.name).toBe('Jess');
  });
});
