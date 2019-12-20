'use strict';

import {Except} from 'type-fest';

interface Options {
	voltage: number;
	amperage: number;
	efficiencyFactor: number;
	length: number;
	time: number;
}

interface Elements {
	coal: number;
	manganese: number;
	chromium: number;
	molybdenum: number;
	vanadium: number;
	nickel: number;
	copper: number;
	silicon: number;
	boron: number;
	nitrogen: number;
}

type ceq = Except<Elements, 'silicon' | 'boron' | 'nitrogen'>;
type cet = Except<Elements, 'silicon' | 'boron' | 'nitrogen'>;
type ceAws = Except<Elements, 'boron' | 'nitrogen'>;
type pcm = Except<Elements, 'nitrogen'>;
type pren = Pick<Elements, 'chromium' | 'molybdenum' | 'nitrogen'>;

/**
    * @returns {number} Equivalent carbon content (CEQ)
	*/
const ceq = (elements: ceq): number => {
	const {
		coal,
		manganese,
		chromium,
		molybdenum,
		vanadium,
		nickel,
		copper
	} = elements;

	return (coal + (manganese / 6) + (chromium + molybdenum + vanadium) / 5 + (nickel + copper) / 15);
};

/**
    * @returns {number} Equivalent carbon content (CET)
	*/
const cet = (elements: cet): number => {
	const {
		coal,
		manganese,
		chromium,
		molybdenum,
		nickel,
		copper
	} = elements;

	return (coal + (manganese + molybdenum) / 10 + (chromium + copper) / 20 + (nickel / 40));
};

/**
    * @returns {number} Equivalent carbon content (CE AWS)
	*/
const ceAws = (elements: ceAws): number => {
	const {
		coal,
		manganese,
		chromium,
		molybdenum,
		vanadium,
		nickel,
		copper,
		silicon
	} = elements;

	return (coal + (manganese / 6) + (chromium + molybdenum + vanadium) / 5 + (nickel + copper) / 15 + (silicon / 6));
};

/**
    * @returns {number} Critical metal parameter (PCM)
	*/
const pcm = (elements: pcm): number => {
	const {
		coal,
		manganese,
		chromium,
		molybdenum,
		vanadium,
		nickel,
		copper,
		silicon,
		boron
	} = elements;

	return (coal + (silicon / 30) + (manganese + copper + chromium) / 20 + (nickel / 60) + (molybdenum / 15) + (vanadium / 10) + 5 * boron);
};

/**
    * @returns {number} Pitting resistance equivalent number (PREN)
	*/
const pren = (elements: pren): number => {
	const {
		chromium,
		molybdenum,
		nitrogen
	} = elements;

	return (chromium + (3.3 * molybdenum) + (16 * nitrogen));
};

/**
    * @returns {number} Heat input
	*/
const heatInput = (options: Options): number => {
	const {
		voltage,
		amperage,
		efficiencyFactor,
		length,
		time
	} = options;

	return ((voltage * amperage * efficiencyFactor) / (length / time * 1000));
};

export {
	ceq,
	cet,
	ceAws,
	pcm,
	pren,
	heatInput
};
