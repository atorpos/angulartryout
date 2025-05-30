// src/app/models/address-suggestion.model.ts

// English Address Block
export interface EngBlock {
  BlockDescriptor: string;
  BlockNo: string;
  BlockDescriptorPrecedenceIndicator: string;
}

// Chinese Address Block
export interface ChiBlock {
  BlockDescriptor: string;
  BlockNo: string;
}

// English Estate
export interface EngEstate {
  EstateName: string;
}

// Chinese Estate
export interface ChiEstate {
  EstateName: string;
}

// English Street
export interface EngStreet {
  StreetName: string;
  BuildingNoFrom: string;
}

// Chinese Street
export interface ChiStreet {
  StreetName: string;
  BuildingNoFrom: string;
}

// English District
export interface EngDistrict {
  DcDistrict: string;
}

// Chinese District
export interface ChiDistrict {
  DcDistrict: string;
}

// English Premises Address
export interface EngPremisesAddress {
  EngBlock?: EngBlock;
  EngEstate: EngEstate;
  EngStreet: EngStreet;
  EngDistrict: EngDistrict;
  Region: string;
}

// Chinese Premises Address
export interface ChiPremisesAddress {
  ChiBlock?: ChiBlock;
  ChiEstate: ChiEstate;
  ChiStreet: ChiStreet;
  ChiDistrict: ChiDistrict;
  Region: string;
}

// Geospatial Information
export interface GeospatialInformation {
  Northing: string;
  Easting: string;
  Latitude: string;
  Longitude: string;
}

// Premises Address (both English and Chinese)
export interface PremisesAddress {
  EngPremisesAddress: EngPremisesAddress;
  ChiPremisesAddress: ChiPremisesAddress;
  GeoAddress: string;
  GeospatialInformation: GeospatialInformation;
}

// Address Wrapper
export interface Address {
  PremisesAddress: PremisesAddress;
}

// Validation Info
export interface ValidationInformation {
  Score: number;
}

// Suggested Address Object
export interface SuggestedAddressItem {
  Address: Address;
  ValidationInformation: ValidationInformation;
}

// Request Address
export interface RequestAddress {
  AddressLine: string[];
}

// Root Object
export interface AddressSuggestionResponse {
  RequestAddress: RequestAddress;
  SuggestedAddress: SuggestedAddressItem[];
}
