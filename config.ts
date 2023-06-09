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
	provider: "https://rpp-opendata.egon.gov.cz/odrpp/zdroj/org%C3%A1n-ve%C5%99ejn%C3%A9-moci/70891508",
	homepage: "https://datalk.cz",
	contact_type: 'Organizace',
	contact_name: 'ARR - Agentura regionálního rozvoje, spol. s r.o.',
	contact_email: 'k.tichy@arr-nisa.cz',
	themes: {
		'Obecná charakteristika': ['REGI', 'GOVE', 'INTR'],
		'Kraj jako instituce': ['GOVE', 'ECON'],
		'Zaměstnanost a pracovní trh': ['ECON','SOCI'],
		'Podníkání, výzkum, vývoj a inovace': ['TECH'],
		'Cestovní ruch': ['EDUC'],
		'Sport': ['EDUC'],
		'Kultura a kulturní dědicství':['EDUC'],
		'Doprava': ['TRAN'],
		'Technická infrastruktura': ['TECH'],
		'Vzdělání': ['EDUC'],
		'Zdravotníctví a zdraví': ['HEAL'],
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
		'00505657667c4181a23b096c65f8abfe',
		'028ab6c325fc4ab8b8620dc605995063',
		'0c3349ab4d9948e9a54456a31f68ee8b',
		'116e68fc726a431b9636de8c6e06b4ef',
		'13bbee61617f4964964c1d5929407073',
		'14b22e6bc39148b9b76cc303e4c8b807',
		'157ffac39a0f43c9be505a5df022fc56',
		'168dbb67d28044089aa724b5e66176e0',
		'1715562db2d540b2b92856bebadec835',
		'18bd3a50afb341cbbd45f5fdd138cdba',
		'220745e680144e379d7a2d9848321527',
		'236bdea78bf341b9bfdf80d62193620b',
		'29035b52c6c84ffdbe66ea9510eefa34',
		'2a11f34cbdc743cdb7dd940873385043',
		'2c32023a4bf84c6c8a20092f7353cc55',
		'2cb22918caad4f64b2cc8cde801ccb0d',
		'2cf9fddd1dfe4004918ba2700d94dfd4',
		'31b6b857575042afac5a63cd88606857',
		'35b2a5916e2b4536aede92e7e2eb047d',
		'3634751ac0e046ea8c42076d5852c780',
		'368ea36db6d8449880082f955bd09920',
		'36c1c65d1ba94fdd80e1e925af5d5dd9',
		'3b46632ffa3247868972557f33d6152d',
		'3c641dabf25b4814957f3906fafbfde9',
		'3d9b75acc37d4e42811700c125eb3869',
		'40cccd9a072545eaa9aede5e278d254f',
		'44a009a160294bcb887ae964c0c37747',
		'4a3927c0440d4e8ab6bfcfb3000911fd',
		'503ee490e3ab41d8bf77cb44034c66a0',
		'5091f48ca7dc4b8d87a6f73128a994f6',
		'527a981accd54227976c6ffa2edcb218',
		'5283340cd36a4263836ede483352d00d',
		'5931c8e5d6fb4feda83e28ed3c8dbcd3',
		'5e012cd039824790b2e78d4c77b987c7',
		'62a2d072601e4d449a2405b1578b9763',
		'6612fdadeb9d4ab5b2b6f38c8cb69698',
		'686771c0a8864cef9e00bd61dd74ba09',
		'6c10001243504f8184de1e7a1f41426d',
		'6df5070404904d10bbb206e79b365dbf',
		'6edc3ffe06814167b9d4375bae216bd0',
		'6f52340ccfd240e59205687f12de9533',
		'714380f65b3749098a7e43091d711823',
		'7690943486474e7c89924c4a4c7c892c',
		'7728d15e8f62466fbe18070de6e185cc',
		'79a8542006d24f14bcf80cebf046fa65',
		'79be1e7643d04600ae2fab36ab47275d',
		'7e43de182cfa496e9778e727bb169dc1',
		'7e7f977e697f497cbf01e4989e0fef29',
		'89b9787b689a4c3f8c44f3c39a14ab99',
		'89f68b7b20de4ccf8de5a28518d404a2',
		'92fa71e167324b789febf04d5d45f0b3',
		'9a1265bd018146a7904b5f4053d3b037',
		'a8e103a3d9114b8d95bfc6fc316a7ce8',
		'b4f0c80a6a0b4c8cbfba6c47f44d2f62',
		'b583bd2b8ec5496c995d1bd6cae73900',
		'b6bc93b76c1f4c6fb0fa0a08f17fb13f',
		'ba70f5eeccce48f2b93c70ab3c7f77a4',
		'bb41d6ac8e2d4988b0e48dc6b876be01',
		'bd749465e32a4068a3777d1d41eba952',
		'c28886b8beb14b8bafa099254324bfcf',
		'c5d20663949546d9999d49fa6e0d33c4',
		'c9b5d6c9c15c45cba36900f9b4fd3501',
		'ca9869f392e846f2bbf0b046de966b2a',
		'cdc1b0ef2b7d4be289e7ed3e2691a195',
		'cf6244e26b27414b8ca119b2b625a1bf',
		'd0cf54c0d96848f3b372822677ef52ae',
		'd469e7ded519414cb389079029ff70f4',
		'd567c16b026b4493bd06272308cea21b',
		'd59a385575ba4e2e9e0b5c527d335b41',
		'd6883478242d41d084ea2174993f595d',
		'd79bba8760024b689e40928b9e41a5f8',
		'da0f59ae3cfb4453b1b0e13ee059b3ca',
		'dc148d1d5507430d9bc64c2d9a43b55c',
		'e2fca8b7dfd3477bbf30ea65b175f798',
		'e5f1145e7d4349c4818633b0364abf15',
		'e6d13d8025f34a4cad1b07a8d816edc1',
		'e6e53d71761445f2815d3cd2d6246910',
		'ecc9442c555d45b286ad983f689bad8a',
		'ed0b75458f8340f2a8ce54cddb38f01a',
		'f1ac105a5b0046138b864b0fbfd6cf77',
		'f7c1c06f83b64803a60cea4953473fdd',
		'f7e862970d534c69bc5470b2a0686169',
		'e6eff69b243f4df099af549b3f5cb09b',
		'01d168c706e544e1a48ea12a3f454fc8',
		'a92aa64ec24946baa360d347c591cb80',
		's1a961fcaca05432ca051198a9c9d878c',
		'ade79caaa9944336bcbe3c3aaad716a8'
	]
}

