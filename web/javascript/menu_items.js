/*
  --- menu items --- 
  note that this structure has changed its format since previous version.
  additional third parameter is added for item scope settings.
  Now this structure is compatible with Tigra Menu GOLD.
  Format description can be found in product documentation.
*/
var MENU_ITEMS = [
	['menu_grp1', null, null,
		['GeneNetwork Intro', '/home.html'],
		['Enter Trait Data', '/webqtl/main.py?FormID=submitSingleTrait'],
		['Batch Submission', '/webqtl/main.py?FormID=batSubmit'],
	],
	['menu_grp2', null, null,
		['Search Databases', '/'],
		['Tissue Correlation', '/webqtl/main.py?FormID=tissueCorrelation'],
		['SNP Browser', '/webqtl/main.py?FormID=snpBrowser'],
		['Gene Wiki', '/webqtl/main.py?FormID=geneWiki'],
		['Interval Analyst', '/webqtl/main.py?FormID=intervalAnalyst'],
		['QTLminer', '/webqtl/main.py?FormID=qtlminer'],
		['GenomeGraph', '/dbResults.html'],
		['Trait Collections',null,null,
['Human', null, null, 
	['CEPH-2004', '/webqtl/main.py?FormID=dispSelection&RISet=CEPH-2004'], 
	['AD-cases-controls', '/webqtl/main.py?FormID=dispSelection&RISet=AD-cases-controls'], 
	['AD-cases-controls-Myers', '/webqtl/main.py?FormID=dispSelection&RISet=AD-cases-controls-Myers'], 
	['CEPH-2009', '/webqtl/main.py?FormID=dispSelection&RISet=CEPH-2009'], 
	['HLC', '/webqtl/main.py?FormID=dispSelection&RISet=HLC'], 
	['CANDLE', '/webqtl/main.py?FormID=dispSelection&RISet=CANDLE'], 
	['HB', '/webqtl/main.py?FormID=dispSelection&RISet=HB'], 
	['HSB', '/webqtl/main.py?FormID=dispSelection&RISet=HSB'], 
	['HLT', '/webqtl/main.py?FormID=dispSelection&RISet=HLT'], 
	['Aging-Brain-UCI', '/webqtl/main.py?FormID=dispSelection&RISet=Aging-Brain-UCI'], 
],
['Macaque monkey', null, null, 
	['Macaca-fasicularis', '/webqtl/main.py?FormID=dispSelection&RISet=Macaca-fasicularis'], 
],
['Mouse', null, null, 
	['BXD', '/webqtl/main.py?FormID=dispSelection&RISet=BXD'], 
	['B6D2F2', '/webqtl/main.py?FormID=dispSelection&RISet=B6D2F2'], 
	['AXBXA', '/webqtl/main.py?FormID=dispSelection&RISet=AXBXA'], 
	['AKXD', '/webqtl/main.py?FormID=dispSelection&RISet=AKXD'], 
	['B6BTBRF2', '/webqtl/main.py?FormID=dispSelection&RISet=B6BTBRF2'], 
	['BXH', '/webqtl/main.py?FormID=dispSelection&RISet=BXH'], 
	['CXB', '/webqtl/main.py?FormID=dispSelection&RISet=CXB'], 
	['LXS', '/webqtl/main.py?FormID=dispSelection&RISet=LXS'], 
	['BDF2-2005', '/webqtl/main.py?FormID=dispSelection&RISet=BDF2-2005'], 
	['MDP', '/webqtl/main.py?FormID=dispSelection&RISet=MDP'], 
	['NZBXFVB-N2', '/webqtl/main.py?FormID=dispSelection&RISet=NZBXFVB-N2'], 
	['BHF2', '/webqtl/main.py?FormID=dispSelection&RISet=BHF2'], 
	['BDF2-1999', '/webqtl/main.py?FormID=dispSelection&RISet=BDF2-1999'], 
	['CTB6F2', '/webqtl/main.py?FormID=dispSelection&RISet=CTB6F2'], 
	['BHHBF2', '/webqtl/main.py?FormID=dispSelection&RISet=BHHBF2'], 
	['HS', '/webqtl/main.py?FormID=dispSelection&RISet=HS'], 
	['HS-CC', '/webqtl/main.py?FormID=dispSelection&RISet=HS-CC'], 
	['B6D2F2-PSU', '/webqtl/main.py?FormID=dispSelection&RISet=B6D2F2-PSU'], 
	['B6D2RI', '/webqtl/main.py?FormID=dispSelection&RISet=B6D2RI'], 
	['SOTNOT-OHSU', '/webqtl/main.py?FormID=dispSelection&RISet=SOTNOT-OHSU'], 
	['C57BL-6JxC57BL-6NJF2', '/webqtl/main.py?FormID=dispSelection&RISet=C57BL-6JxC57BL-6NJF2'], 
	['Scripps-2013', '/webqtl/main.py?FormID=dispSelection&RISet=Scripps-2013'], 
],
['Rat', null, null, 
	['HXBBXH', '/webqtl/main.py?FormID=dispSelection&RISet=HXBBXH'], 
	['SRxSHRSPF2', '/webqtl/main.py?FormID=dispSelection&RISet=SRxSHRSPF2'], 
	['HSNIH', '/webqtl/main.py?FormID=dispSelection&RISet=HSNIH'], 
],
['Drosophila', null, null, 
	['Oregon-R_x_2b3', '/webqtl/main.py?FormID=dispSelection&RISet=Oregon-R_x_2b3'], 
	['DGRP', '/webqtl/main.py?FormID=dispSelection&RISet=DGRP'], 
],
['Arabidopsis thaliana', null, null, 
	['BayXSha', '/webqtl/main.py?FormID=dispSelection&RISet=BayXSha'], 
	['ColXCvi', '/webqtl/main.py?FormID=dispSelection&RISet=ColXCvi'], 
	['ColXBur', '/webqtl/main.py?FormID=dispSelection&RISet=ColXBur'], 
],
['Barley', null, null, 
	['SXM', '/webqtl/main.py?FormID=dispSelection&RISet=SXM'], 
	['QSM', '/webqtl/main.py?FormID=dispSelection&RISet=QSM'], 
],
['Soybean', null, null, 
	['J12XJ58F2', '/webqtl/main.py?FormID=dispSelection&RISet=J12XJ58F2'], 
],
['Tomato', null, null, 
	['LXP', '/webqtl/main.py?FormID=dispSelection&RISet=LXP'], 
],
		],
		['Scriptable Interface', '/CGIDoc.html'],
		/* ['Simple Query Interface', '/GUI.html'], */
		['Database Information',null,null,
			['Database Schema', '/webqtl/main.py?FormID=schemaShowPage'],
		],
		['Data Sharing', '/webqtl/main.py?FormID=sharing'],
		['Microarray Annotations', '/webqtl/main.py?FormID=annotation'],
	],
	['menu_grp3', null, null,
		['Movies','http://www.genenetwork.org/tutorial/movies'],
		['Tutorials', null, null, 
                ['GN Barley Tutorial','/tutorial/pdf/GN_Barley_Tutorial.pdf'],
                ['GN Powerpoint', '/tutorial/ppt/index.html']],
		['HTML Tour','/tutorial/WebQTLTour/'],
		['FAQ','/faq.html'],
		['Glossary of Terms','/glossary.html'],
		['GN MediaWiki','http://wiki.genenetwork.org/'],
	],
	['menu_grp4', '/whats_new.html'
	],
	['menu_grp5', '/reference.html'
	],
	['menu_grp6', null, null,
		['Conditions and Limitation', '/conditionsofUse.html'],
		['Data Sharing Policy', '/dataSharing.html'],
		['Status and Contacts', '/statusandContact.html'],
		['Privacy Policy', '/privacy.html'],
	],
	['menu_grp8', '/links.html'
	],
];
