import path from "path";

export const ARCGIS_URL = 'https://www.datalk.cz/data.json';
export const ARCGIS_FILE = path.resolve(__dirname, 'data/arcgis.json');

export const DTO_FILE = path.resolve(__dirname, 'data/dto.json');

export const LKOD_URL = process.env.URL || process.env.VERCEL_URL || 'https://open.datalk.cz'; //umisteni LKOD
export const LKOD_DIR = path.resolve(__dirname, 'public');
export const LKOD_FILE = path.resolve(__dirname, 'public/katalog.jsonld');

export const META_LKOD = {
	name_cz: "Katalog otevřených dat Libereckého kraje",
	description_cz: "Otevřená data Libereckého kraje. Datové sady jsou ve strojově čitelných formátech, volně přístupné k libovolným (legálním) účelům využití, bez licenčních omezení.",
	provider: "https://rpp-opendata.egon.gov.cz/odrpp/zdroj/orgán-veřejné-moci/70891508",
	homepage: "https://datalk.cz",
	contact_type: 'Organizace',
	contact_name: 'ARR - Agentura regionálního rozvoje, spol. s r.o.',
	contact_email: 'k.tichy@arr-nisa.cz',
	themes: {
		'Obecná charakteristika': ['REGI', 'GOVE', 'INTR'],
		'Kraj jako instituce': ['GOVE', 'ECON'],
		'Dotace': ['GOVE', 'ECON'],
		'Zaměstnanost a pracovní trh': ['ECON','SOCI'],
		'Podníkání, výzkum, vývoj a inovace': ['TECH'],
		'Cestovní ruch': ['EDUC'],
		'Sport': ['EDUC'],
		'Kultura a kulturní dědictví':['EDUC'],
		'Doprava': ['TRAN'],
		'Technická infrastruktura': ['TECH'],
		'Vzdělávání': ['EDUC'],
		'Zdravotnictví a zdraví': ['HEAL'],
		'Sociální oblast': ['SOCI'],
		'Bezpečnost': ['JUST'],
		'Správa a rozvoj území': ['REGI'],
		'Bydlení': ['REGI'],
		'Města a venkov': ['REGI', 'GOVE'],
		'Životní prostředí': ['ENVI'],
		'Příroda a krajina': ['ENVI'],
		'Zemědělství': ['ENVI', 'AGRI'],
	} as Record<string, string[]>,
	periodicity: {
		'000': 'UNKNOWN',
		'001': 'CONT',
		'002': 'DAILY',
		'003': 'WEEKLY',
		'004': 'BIWEEKLY',
		'005': 'MONTHLY',
		'006': 'QUARTERLY',
		'007': 'BIENNIAL',
		'008': 'ANNUAL',
		'009': 'OTHER',
		'010': 'IRREG',
		'011': 'NEVER',
		'012': 'UNKNOWN',
	} as Record<string, string>,
	excludedDatasets: [
	]
}

