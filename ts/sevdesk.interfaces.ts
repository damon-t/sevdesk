export type TAvailableAccountingType =
  | 'OTHER INCOME'
  | 'OTHER COSTS'
  | 'SALES TAX COSTS'
  | 'VEHICLE'
  | 'PETROL'
  | 'INSPECTION REPAIR'
  | 'VEHICLE TAX'
  | 'VEHICLE INSURANCE'
  | 'VEHICLE LEASING RENTAL'
  | 'PARKING RENT'
  | 'CAR MAINTENANCE'
  | 'OTHER VEHICLE COSTS'
  | 'CREDIT'
  | 'REPAYMENT'
  | 'LENDING RATES'
  | 'CREDIT FEES'
  | 'MATERIAL GOODS'
  | 'MATERIAL PURCHASE'
  | 'GOODS PURCHASE'
  | 'COSTS REDUCTIONS'
  | 'LAWYER'
  | 'TAX CONSULTANT'
  | 'SALES'
  | 'SALES TAX INCOME'
  | 'REVENUE'
  | 'SALES DEDUCTIONS'
  | 'COMMISSION'
  | 'POWER CONSUMPTION'
  | 'PATENT LICENSE'
  | 'PRIVATE DEPOSIT'
  | 'OVERDUE FINE'
  | 'PASSING ITEM'
  | 'MONETARY TRANSIT'
  | 'ROUNDING DIFFERENCES'
  | 'BUSINESS MEETING'
  | 'BUSINESS LUNCH'
  | 'FOREIGN SERVICES'
  | 'SERVICE PROVIDER'
  | 'SUBCONTRACTOR'
  | 'LEASING MACHINE'
  | 'RENT HOUSE'
  | 'POWER WATER GAS'
  | 'TRASH TAXES'
  | 'STAFF'
  | 'HELP WAGE'
  | 'HEALTH INSURANCE'
  | 'WAGE SALARY'
  | 'HELP TAXES'
  | 'PROVISION'
  | 'TRAVEL'
  | 'TRAIN PLANE TICKET'
  | 'TRAVEL COSTS'
  | 'PUBLIC TRANSPORT'
  | 'TAXI'
  | 'ACCOMMODATION BREAKFAST'
  | 'INCIDENTALS'
  | 'RENOVATION MAINTENANCE'
  | 'PURCHASES'
  | 'OFFICE SUPPLIES'
  | 'ACCOUNT RATES'
  | 'ACCOUNT CARD FEE'
  | 'POSTAGE'
  | 'PERSONAL DRAWINGS'
  | 'CLEANING'
  | 'MAGAZINE BOOKS'
  | 'REMINDER FEES'
  | 'TRANSITORY ITEMS'
  | 'CASH TRANSIT'
  | 'ROUNDING DIFFERENCES'
  | 'TAXES'
  | 'SALES TAX'
  | 'INCOME TAX'
  | 'TRADE TAX'
  | 'LANDLINE'
  | 'INTERNET'
  | 'MOBILE'
  | 'INSURANCE DUES'
  | 'PUBLIC LIABILITY'
  | 'GUILD ASSOCIATION FEES'
  | 'LEGAL PROTECTION'
  | 'TRANSPORT INSURANCE'
  | 'COMPANY INSURANCE'
  | 'ADVERTISING'
  | 'BUSINESS CARDS'
  | 'MARKETING'
  | 'TRADE FAIR COSTS'
  | 'CORPORATE GIFTS'
  | 'DONATIONS'
  | 'IMPORT SALES TAX'
  | 'TRANSPORT FREIGHT'
  | 'INCOME PRICE GAIN'
  | 'SALES DEDUCTION'
  | 'PER DIEMS'
  | 'NON DEDUCTIBLE COSTS'
  | 'OFFICE'
  | 'ROOM'
  | 'MACHINES'
  | 'MACHINES BUILDINGS'
  | 'BUILDINGS'
  | 'CARS'
  | 'COSTS BOOKKEEPING'
  | 'PRIVATE'
  | 'SOFTWARE'
  | 'HOSTING'
  | 'ADVANCED EDUCATION'
  | 'MAINTENANCE MASCHINE'
  | 'GAS'
  | 'GAS'
  | 'FREEHOLD PROPERTY'
  | 'LEASEHOLD PROPERTY'
  | 'PLANT MACHINERY'
  | 'OFFICE EQUIPMENT'
  | 'FURNITURE FIXTURES'
  | 'MOTOR VEHICLES'
  | 'INVENTORY'
  | 'WORK IN PROGRESS'
  | 'FINISHED GOODS'
  | 'INVENTORY'
  | 'BANK CURRENT ACCOUNT'
  | 'BANK DEPOSIT ACCOUNT'
  | 'BUILDING SOCIETY ACCOUNT'
  | 'PETTY CASH'
  | 'CASH RECEIPTS'
  | 'COMPANY CREDIT CARD'
  | 'CREDIT CARD RECEIPTS'
  | 'ACCOUNTS PAYABLE CONTROL'
  | 'SUNDRY CREDITORS'
  | 'OTHER CREDITORS'
  | 'ACCURALS'
  | 'SALES TAX CONTROL'
  | 'PURCHASE TAX CONTROL'
  | 'VAT LIABILITY'
  | 'PAYE'
  | 'NATIONAL INSURANCE'
  | 'NET WAGES CONTROL'
  | 'PENSION FUND'
  | 'LOANS'
  | 'HIRE PURCHASE'
  | 'CORPORATION TAX'
  | 'MORTGAGES'
  | 'PREFERENCE SHARES'
  | 'RESERVES'
  | 'UNDISTRIBUTED RESERVES'
  | 'PROFIT AND LOSS ACCOUNT'
  | 'SALES TYPE A'
  | 'SALES TYPE B'
  | 'SALES TYPE C'
  | 'DISCOUNTS ALLOWED'
  | 'SALES TYPE D'
  | 'SALES TYPE E'
  | 'SALES OF ASSETS'
  | 'CREDIT CHARGES'
  | 'MISCELLANEOUS INCOME'
  | 'ROYALTIES RECEIVED'
  | 'INSURANCE CLAIMS'
  | 'RENT INCOME'
  | 'DISTRIBUTION AND CARRIAGE'
  | 'MATERIALS PURCHASED'
  | 'MATERIALS IMPORTED'
  | 'MISCELLANEOUS PURCHASES'
  | 'PACKAGING'
  | 'DISCOUNTS TAKEN'
  | 'CARRIAGE'
  | 'IMPORT DUTY'
  | 'TRANSPORT INSURANCE'
  | 'OPENING STOCK'
  | 'CLOSING STOCK'
  | 'PRODUCTIVE LABOUR'
  | 'COST OF SALES LABOUR'
  | 'SUBCONTRACTORS'
  | 'SALES COMISSIONS'
  | 'SALES PROMOTION'
  | 'ADVERTISING'
  | 'GIFTS AND SAMPLES'
  | 'PR'
  | 'MISCELLANEOUS EXPENSES'
  | 'GROSS WAGES'
  | 'DIRECTORS SALARIES'
  | 'DIRECTORS REMUNERATION'
  | 'STAFF SALARIES'
  | 'WAGES REGULAR'
  | 'WAGES CASUAL'
  | 'EMPLOYERS NI'
  | 'EMPLOYERS PENSIONS'
  | 'RECRUITMENT EXPENSES'
  | 'ADJUSTMENTS'
  | 'SSP RECLAIMED'
  | 'SMP RECLAIMED'
  | 'RENT'
  | 'WATER RATES'
  | 'GENERAL RATES'
  | 'PERMISES INSURANCE'
  | 'ELECTRICITY'
  | 'GAS'
  | 'OIL'
  | 'OTHER HEATING COSTS'
  | 'MOTOR FUEL'
  | 'REPAIRS AND RENEWALS'
  | 'LICENSES'
  | 'VEHICLE INSURANCE'
  | 'MISCELLANEOUS MOTOR'
  | 'SCALE CHARGES'
  | 'TRAVELLING'
  | 'CAR HIRE'
  | 'HOTELS'
  | 'UK ENTERTAINMENT'
  | 'OVERSEAS ENTERTAINMENT'
  | 'OVERSEAS TRAVELLING'
  | 'SUBSISTENCE'
  | 'PRINTING'
  | 'CORREOS'
  | 'TELEPHONE'
  | 'TELEFAX'
  | 'OFFICE STATIONARY'
  | 'BOOKS ETC'
  | 'LEGAL FEES'
  | 'AUDIT AND ACCOUNTANCY'
  | 'FEES'
  | 'CONSULTANCY FEES'
  | 'PROFESSIONAL FEES'
  | 'EQUIPMENT HIRE'
  | 'OFFICE MAINTENANCE'
  | 'REPAIRS AND RENEWALS'
  | 'CLEANING'
  | 'LAUNDRY'
  | 'PREMISES EXPENSES'
  | 'BANK INTEREST PAID'
  | 'BANK CHARGES'
  | 'CURRENCY CHARGES'
  | 'LOAN INTEREST PAID'
  | 'HP INTEREST'
  | 'CREDIT CHARGES'
  | 'EXCHANGE RATE VARIANCE'
  | 'DEPRECIATION'
  | 'BAD DEPT WRITE OFF'
  | 'BAD DEPT PROVISION'
  | 'DONATIONS'
  | 'SUBSCRIPTIONS'
  | 'CLOTHING COSTS'
  | 'TRAINING COSTS'
  | 'INSURANCE'
  | 'REFRESHMENTS'
  | 'SUSPENSE ACCOUNT'
  | 'MISPOSTINGS ACCOUNT'
  | 'STOCK PURCHASED'
  | 'STORED PURCHASES RAW GOODS'
  | 'STORED PURCHASES OTHER SUPPLIES'
  | 'NONSTOCK PURCHASES MATERIALS SUPPLIES'
  | 'NONSTOCK PURCHASES MATERIALS SUPPLIES'
  | 'CHANGE IN STOCKS'
  | 'RENTAL'
  | 'LEASING CHARGES'
  | 'RENTALS'
  | 'MAINTENANCE AND REPAIRS'
  | 'MAINTENANCE AND REPAIRS'
  | 'INSURANCE PREMIUM'
  | 'DOCUMENTATION FEES'
  | 'MISCELLANEOUS DOC CONFERENCES'
  | 'EXTERNAL PERSONNEL'
  | 'EXTERNAL PERSONNEL'
  | 'FEES'
  | 'RENUM INTERMEDIARIES FEES'
  | 'ADVERTISING PUBLICATIONS'
  | 'TRANSPORT'
  | 'TRANSPORT GOODS PERSONNEL'
  | 'MISSION RECEPTION EXPENSES'
  | 'TRAVEL ASSIGNMENTS ENTERTAINMENT'
  | 'POSTAL TELECOM CHARGES'
  | 'POSTAL TELECOM CHARGES'
  | 'FINANCIAL CHARGES'
  | 'BANKING RELATED SERVICES'
  | 'TAXES DUTIES PAYMENTS'
  | 'TAXES DUTIES PAYMENTS'
  | 'RENUM STAFF'
  | 'RENUM STAFF'
  | 'SOCIAL SEC WELFARE'
  | 'SOCIAL SEC WELFARE'
  | 'OTHER CURRENT MANAG EXP'
  | 'OTHER CURRENT MANAG EXP'
  | 'INTEREST CHARGES'
  | 'DISCOUNTS GRANTED'
  | 'EXTRAORD CHARGES'
  | 'EXTRAORD CHARGES'
  | 'DEPRECIATION AMORTIZATION'
  | 'DEPRECIATION AMORTIZATION'
  | 'SALE OF GOODS'
  | 'SALES FINISHED PRODUCTS'
  | 'SERVICES'
  | 'SERVICES'
  | 'SALE OF GOODS'
  | 'CONNECTION ADDITIONAL CHARGES'
  | 'CHANGE STOCKS FINISHED GOODS'
  | 'CAPITALIZED PRODUCTION'
  | 'CAPITALIZED PRODUCTION'
  | 'OTHER MANAGMENT PRODUCTS'
  | 'OTHER MANAGMENT PRODUCTS'
  | 'FINANCIAL PRODUCTS'
  | 'FINANCIAL PRODUCTS'
  | 'DISCOUNTS OBTAINED'
  | 'EXCEPTIONAL PRODUCTS'
  | 'EXCEPTIONAL PRODUCTS'
  | 'ADVERTISING PUBLICATIONS'
  | 'INSURANCE PREMIUM'
  | 'OTHER SOCIAL ORGANISATIONS'
  | 'PROPERTY LEASING FEE'
  | 'REALESTATE LEASING FEE'
  | 'IMBLOCKING RENTALS'
  | 'MOBILE RENTALS'
  | 'TECHNICAL DOCUMENTATION'
  | 'CONVERENCFEES CONVERENCE SEMINAR'
  | 'STAFF TRANSPORTATION'
  | 'LIABILITIES'
  | 'WAGE'
  | 'SALARY'
  | 'SALARY MANAGER'
  | 'MINIJOB TAX'
  | 'MINIJOB WAGE'
  | 'LIABILITIES WAGE SALARY'
  | 'LIABILITIES WAGE CHURCH TAX'
  | 'LIABILITIES SOCIAL SECURITY'
  | 'WAGE SALARY BILLING'
  | 'TRAVEL EXPENSES EMPLOYEE'
  | 'TRAVEL FOOD EMPLOYEE'
  | 'TRAVEL OVERNIGHT EMPLOYEE'
  | 'TRAVEL DRIVING REFUND EMPLOYEE'
  | 'TRAVEL DRIVING REFUND MANAGER'
  | 'CN FOREIGN SERVICES'
  | 'CN SALE PROVISION'
  | 'NEGATIVE SOLD TANGIBLE TAX ASSET'
  | 'FIXED ASSET DISPOSALS'
  | 'NEGATIVE FIXED ASSET DISPOSALS';
