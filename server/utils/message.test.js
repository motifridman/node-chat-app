var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'jen';
    var text = 'Some message';
    var message = generateMessage(from, text);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () =>{
    var from = 'Andrew';
    var latitude = 1;
    var longitude = 5;
    var message = generateLocationMessage(from, latitude, longitude);


    expect(typeof message.createdAt).toBe('number');
    expect(message.from).toBe(from);
    expect(message.url).toBe('https://www.google.com/maps?q=1,5');
  });
});