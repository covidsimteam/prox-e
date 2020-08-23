export module HealthStats {

  export interface District {
      province: string;
      district: string;
      quarantine_total: number;
      bed_capacity: number;
      quarantined_total: number;
      home_quarantine: number;
      isolation_beds: number;
      isolated_total: number;
      swabs_collected_till_yesterday: number;
      todays_swab_collection: number;
      total_swab_collection: number;
      awaiting_results: number;
      male_positives: number;
      female_positives: number;
      total_positives: number;
      negatives: number;
      collected_till_yesterday: number;
      todays_rdt_tests: number;
      total_rdt_tests: number;
      positives: number;
      negatives_1: number;
      discharged_till_yesterday: number;
      discharged_today: number;
      total_discharged: number;
      unlabeled: number;
  }

  export interface Districts {
      _id: 'district_health_stats';
      _rev?: string;
      values: District[];
  }


  export function isDistrictHealthStats(properties: HealthStats.Districts | any):
  properties is HealthStats.Districts {
    return (properties as HealthStats.Districts)?._id === 'district_health_stats';
  }

}

