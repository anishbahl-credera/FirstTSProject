import HomePageComponent from './home-page/home-page.component';
import ShopPageComponent from './shop-page/shop-page.component';
import ProductDetailComponent from './productDetail/productDetail.component';
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
  // Currently a fallback route which will match if any routes above are not exactly matched
  // NOTE: Fallback routes should always be last
  { path: '/', linkText: 'Home', routeComponent: HomePageComponent, exact: false }
  
];

export default routes;
