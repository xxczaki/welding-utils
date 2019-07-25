import test from 'ava';
// eslint-disable-next-line import/no-unresolved
import {ceq, cet, ceAws, pcm, pren, heatInput} from '../dist';

const elements = {
	coal: 1,
	manganese: 1.3,
	chromium: 0.4,
	molybdenum: 2,
	vanadium: 2.1,
	nickel: 0.8,
	copper: 1.1,
	silicon: 2.8,
	boron: 3,
	nitrogen: 0.03
};

test('ceq', t => {
	t.is(ceq(elements), 2.243333333333333);
});

test('cet', t => {
	t.is(cet(elements), 1.425);
});

test('ceAws', t => {
	t.is(ceAws(elements), 2.71);
});

test('pcm', t => {
	t.is(pcm(elements), 16.59);
});

test('pren', t => {
	t.is(pren(elements), 7.48);
});

test('heatInput', t => {
	const options = {
		voltage: 200,
		amperage: 32,
		efficiencyFactor: 0.8,
		lenght: 20,
		time: 11
	};

	t.is(heatInput(options), 2.8160000000000003);
});
