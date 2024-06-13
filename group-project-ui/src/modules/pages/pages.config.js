import HomePageComponent from './home-page/home-page.component';
import ShopPageComponent from './shop-page/shop-page.component';
import ProductDetailComponent from './productDetail/FranksRedHot';
import HuyFongConfig from './productDetail/HuyFong';
import CholulaConfig from './productDetail/Cholula';
import TexasPeteConfig from './productDetail/TexasPete';
import TapatioConfig from './productDetail/Tapatio';
import TabascoConfig from './productDetail/Tabasco';
import LHS_Config from './productDetail/LHS';
import ValentinaConfig from './productDetail/Valentina';
import CrystalConfig from './productDetail/Crystal';
import Cart from './cart/cart.component';
// Example component to demonstrate routing with multiple pages
const TestComp = () => (
  <div>Test</div>
)
 
// Config for root routes to easily add/omit routes
// NOTE: Including linkText property will include route in navigation menu; omit this property for routes which shouldn't be in navigation
// NOTE: You may need to update this config with more properties and map to the RootLayout if more complex routes are required
export const routes = [
  { path: '/test', linkText: 'Test', routeComponent: TestComp, exact: true },
  { path: '/shop', linkText: 'Shop', routeComponent: ShopPageComponent, exact: true },
  { path: '/productDetail', linkText: 'productDetail', routeComponent: ProductDetailComponent, exact: true },
  { path: '/cart', linkText: 'cart', routeComponent: Cart, exact: true },
  //path for each sauce
  { path: '/FranksRedHot', linkText: 'FranksRedHot', routeComponent: ProductDetailComponent, exact: true },
  { path: '/HuyFong', linkText: 'HuyFong', routeComponent: HuyFongConfig, exact: true },
  { path: '/Cholula', linkText: 'Cholula', routeComponent: CholulaConfig, exact: true },
  { path: '/TexasPete', linkText: 'Texas Pete', routeComponent: TexasPeteConfig, exact: true },
  { path: '/Tapatio', linkText: 'Tapatio', routeComponent: TapatioConfig, exact: true },
  { path: '/Tabasco', linkText: 'Tabasco', routeComponent: TabascoConfig, exact: true },
  { path: '/LHS', linkText: 'Louisiana', routeComponent: LHS_Config, exact: true },
  { path: '/Valentina', linkText: 'Valentina', routeComponent: ValentinaConfig, exact: true },
  { path: '/Crystal', linkText: 'Crystal', routeComponent: CrystalConfig, exact: true },
  // Currently a fallback route which will match if any routes above are not exactly matched
  // NOTE: Fallback routes should always be last
  { path: '/', linkText: 'Home', routeComponent: HomePageComponent, exact: false },
];

export default routes;