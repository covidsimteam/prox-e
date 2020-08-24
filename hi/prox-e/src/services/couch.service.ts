export class ProxyCouchService {
  
  private static proxyCouchServiceInstance: ProxyCouchService;

  constructor() {
    if (!ProxyCouchService.proxyCouchServiceInstance) {
      ProxyCouchService.proxyCouchServiceInstance = this;
    }
    return ProxyCouchService.proxyCouchServiceInstance;
  }

  async getUser() {}
  
}