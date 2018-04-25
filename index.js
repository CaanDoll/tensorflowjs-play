/*
import * as tf from '@tensorflow/tfjs';

const model = tf.sequential();
model.add(tf.layers.dense({ units: 1, inputShape: [ 1 ] }));
model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });
const xs = tf.tensor2d([ [ 1 ], [ 2 ], [ 3 ], [ 4 ] ], [ 4, 1 ]);
const ys = tf.tensor2d([ [ 1 ], [ 3 ], [ 5 ], [ 7 ] ], [ 4, 1 ]);
(async () => {
  await model.fit(xs, ys, { epochs: 500 });
})();
const output = model.predict(tf.tensor2d([ [ 5 ] ], [ 1, 1 ]));
output.print();*/
import * as tf from '@tensorflow/tfjs';

const a = tf.tensor1d([ 1, 2, 3 ]);
const b = tf.scalar(2);
const result = a.add(b);
console.log(result.dataSync());