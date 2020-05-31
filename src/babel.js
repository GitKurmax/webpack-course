const f = async () => {
    const res = await Promise.resolve('Babel async is working!');

    return res;
}

const unused = 42;

f().then(res => console.log(res));

class Util {
    static id = Date.now();
}

console.log('Util Id', Util.id);

import('lodash').then(_ => {
    console.log('Lodash', _.random(0, 42, true));
})

