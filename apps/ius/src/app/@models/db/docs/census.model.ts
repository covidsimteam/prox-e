export module Census2011 {

  export interface District {
      id: number;
      district: string;
      households: number;
      total: number;
      male: number;
      female: number;
  }

  export interface Districts {
      _id: 'district_stats_2011';
      _rev?: string;
      values: District[];
  }

  export function isDistrictCensus(properties: Census2011.Districts | any):
  properties is Census2011.Districts {
    return (properties as Census2011.Districts)?._id === 'district_stats_2011';
  }

}

export module CensusUpdated {

  export interface Municipality {
      id: string;
      description: string;
      municipality: string;
      population: number;
  }

  export interface Municipalities {
      id: 'municipality_stats';
      _rev?: string;
      values: Municipality[];
  }
}
