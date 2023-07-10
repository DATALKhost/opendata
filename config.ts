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
		'Zaměstnanost a pracovní trh': ['ECON','SOCI'],
		'Podníkání, výzkum, vývoj a inovace': ['TECH'],
		'Cestovní ruch': ['EDUC'],
		'Sport': ['EDUC'],
		'Kultura a kulturní dědicství':['EDUC'],
		'Doprava': ['TRAN'],
		'Technická infrastruktura': ['TECH'],
		'Vzdělání': ['EDUC'],
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
		'1a961fcaca05432ca051198a9c9d878c',
		'ade79caaa9944336bcbe3c3aaad716a8',
		'5ed428af9a0e4c0987ab31bf8695a903',
		'aad54a35bf6e4250ab4913f11f16df73',
		'0ec0adc2d93545b79d602447919d3d58',
		'076404013e654b6083d6ada6f1664348',
		'fa6c6a9365da421f94e51d3cfdf65f72',
		'76ca12f18fec4006abae9015be8e9a7d',
		'962b4a31dd8647e4b7c192a2f95d77bd',
		'ecd1a63a71824753bed681d52034ca7f',
		'd26eb8639f194c199ea21c0054a62faa',
		'3ab2ad92ae73482393f47a3b7b61f063',
		'f8f62dc229b545fc9f01a942b9f30017',
		'2b134f28a42e45c3ad54075661903e6e',
		'5b37e333c0a54f36bf98955d26a96a15',
		'c258c0bbbb1f49329c112bac87ce98d5',
		'c6b6315dc12442da84622db9589b83d4',
		'b735cd28470d4d09ba3a0cc62dff3526',
		'26479d3ba6dd45bb87b018d8987044b7',
		'0c786215e59b4ffa91d26cfa87e2ac4c',
		'9c18e3092cf54f69a7599cd3bc8eb6f7',
		'70e2183e47a748cdac004b0025f860e7',
		'6828d321ad6a4486873eeeef4700d381',
		'260965e6b128406ba7dfca5a3ce1b552',
		'ab36448a9c7c4fe0adae286928be0cdf',
		'e644aeb5b29b4dc08bf08e7bcfa0b238',
		'953a02d903dc4614a1d333e61553f2eb',
		'bd08551ab6804a02b83648edf687477e',
		'0fc4220a8dd04129b9f4284f7bfcda1a',
		'2d846bfed768416aa92b951428802dc1',
		'43ba491903f847ceade5a23c95197c36',
		'467a2823c7804f9f8dd0206dfb635639',
		'48ad3782b47841b7a480ff208190f249',
		'4d4daca21f7347b78e72533fe3abf035',
		'52e627c0f50c4ed68da029d983672d68',
		'5e3965780264419abc3532a83edac1b3',
		'701d024c05f54e7985bad1d47801fd21',
		'778a6b5b0e58403fabca24636f10ea64',
		'7911f98de60d475a967252af57f93b3b',
		'be93f5f4f23e4080be466a8ff69a4ebc',
		'c3f7efbfae6c4c2588103ad8bf4082ea',
		'c891214038a94f17bd6a51d8cff30dc4',
		'db56fc99fee0419ab207f1e7528e3d5a',
		'4ba716b94dfb4624a7bcb39a59da0b5b',
		'604740d892af40b5b1af40cca63906bc',
		'd610701051404b4698caa013c7dc262a',
		'172ca60c063e4740bdc5ac89fe84a2ee',
		'f30c64b0e5cf4db395b24a899c7cc413',
		'81dc8b2f05134ea0ba652879425683a3',
		'fbf46088eca547888852ef0424abacb2',
		'f57f0d7f08eb4c68ad8044ee37b13a1f',
		'3f69f0ba74954d6e8abeabc4c0ff6f67',
		'7253f93b9e274ce2aab2fcd1c36f0ae5',
		'f887ea3ef89e4332a4d54d68346f8905',
		'a0d1d4060c084de0aa563f64184a582a',
		'25bd75e141094bd19f25353500cde0e3',
		'83fb25e4389b4d01961a48b7f8ad2cbb',
		'00a96c63745c441eaf3d9b98ce092456',
		'340dee0b400647de877dd2f8ad5a42a8',
		'9056f96538c14c46bfc3ce9c725b4201',
		'703efa604dba4957b9deec75302ffba4',
		'1602fe642cd44bb196142f9eb7f98396',
		'3938eba5c8514f5c809a06789c51fb17',
		'395a40d3713949b384306f1a313b6fce',
		'83ab05253a944adc82f798833599eaea',
		'efa2de18997b4de5a60f67d7407476fc',
		'6ec479e06b72443689046fa350dfcc78',
		'3059ff33cf6c40e199e80a4cb97edd3f',
		'fa24b2ee66e1487d8f332aa10b572073',
		'1880d50384994e16bc247ea14b5e664b',
		'802ac43184404315a82d49298e463e2c',
		'a9feb0e54eae4b46bb9918afda5ea166',
		'89b5142b2d1648f09bdb6ebb590f868c',
		'043089333041495a8b4f8c214f2befea',
		'3df7ad769acf4540993e80940f37cb80',
		'914c97e4b550416aa9671909badc7eb7',
		'ed5060b2178b440591c9738bec1edcb9',
		'b9c75af314c94cabbd523712121ae2b5',
		'fb2d2f12dda64f6896f1713bd18f2af6',
		'8647316b561e474d8114dab2e16ba003',
		'16be45210e9e4f16a4d342c8e01b8f71',
		'50e13f7cdb80403bad73755c34a4d3d6',
		'3780ef66580a4918b01e702a7cd320d5',
		'9313329d4dab42aaa243c185cc6b8f89',
		'f552d2d617b34694999fea89a9dfa1a6',
		'a65a19984497402b914a5bda3ba288ea',
		'70bb0dc56d3d407e9b61374931defd75',
		'a6628748f4bf4de7aecc1096f91cedff',
		'5ab13264167f42a78a2b674582a2ff9e',
		'c5fcaf747f00438ba3a48e822c99c198',
		'bd39050da245487981c2406fc014e76e',
		'1e1ccc6726874a45bc3d1e327c093c70',
		'fab34c0e26dc4fc89c103067931764d7',
		'956b5cdce7b346d7a45144141b35507a',
		'42af132c417b4bbeb7669026eb860f77',
		'c743901e6aa34590b549beed23e145cb',
		'2a9a9d0682eb4fe8812df19f7cb0b55d',
		'43e30d86841c44abaed076bb6e3c8517',
		'8935c24fc9374af9bc1be9b9a72b9a43',
		'98148048c5024561a8bb2f64b0c8d925',
		'dce5fa14c9414f949e881ae46dde19ac',
		'df8a9a58532345e8aa07d0e71248779f',
		'ed54c07a54b24590adc9a96fe5ce5519',
		'dd48db80d17042f69746f4b4691e53b1',
		'3cdae628c9ae4b7caca7602de258e1af',
		'4c9cc85b660c47aca88a8301fbf8cf9b',
		'835a5abfdc1f4bafa900d823ddc11f7e',
		'6e0a0d0324d6475a9f12f3de9cdf2a44',
		'c22559a51f9f4443b3c8bcc3527cae89',
		'0b9c3edba3d14a238ffa33c4def826af',
		'5a235ae5d59549ad8d99700cac31fefb',
		'f5ce6f7117cf4ec0a6557a72de838de8',
		'08200532d6674f29a9ea2094212f6c33',
		'180c266ae3034fb7b4ca4b1bb0bdd810',
		'8e11ecb21f7348038a529c1fc401e0a4',
		'22a99fd553cd43bb958a549f02c272b9',
		'3fecd9381e2e46faa9a41da25b1931c2',
		'e4fe36bff4794f50ade0886c2d79f561',
		'87b9da67ec28498e94df1775b34723b5',
		'12e37c6cacb44f30808471365d15c4c6',
		'4acc6ed4f9fd4b508c188bcb7719a66b',
		'b165c1f80d0c49b09557382b4fdc0440',
		'c898f91d690845ab91b54a9580e220c9',
		'653dab2c1e724d7aa661ef6160cb0c87',
		'734155226be14671b130aca7c0be6eaa'
	]
}

