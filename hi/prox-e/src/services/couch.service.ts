export class CouchService {
  
  private static instance: CouchService;

  constructor() {

    if (!CouchService.instance) {
      CouchService.instance = this;
    }

    return CouchService.instance;
  }

  async getUser() {}
  
}