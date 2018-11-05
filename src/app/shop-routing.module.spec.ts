import { ShopRoutingModule } from './shop-routing.module';

describe('ShopRoutingModule', () => {
  let shopRoutingModule: ShopRoutingModule;

  beforeEach(() => {
    shopRoutingModule = new ShopRoutingModule();
  });

  it('should create an instance', () => {
    expect(shopRoutingModule).toBeTruthy();
  });
});
