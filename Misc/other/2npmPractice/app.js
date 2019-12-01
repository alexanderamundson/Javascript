const faker = require('faker');

for (let i = 0; i < 10; i++) {
    console.log(faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));
    console.log(faker.internet.email());
}