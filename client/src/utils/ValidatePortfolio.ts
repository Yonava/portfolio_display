import Header from '../utils/PortfolioSchemas/Header'
import Footer from '../utils/PortfolioSchemas/Footer'

// takes full portfolio data (of type object) and returns an array<string> of components that are invalid
export default function validatePortfolio(portfolioData: any) {

  const components = Object.keys(portfolioData);
  const invalidComponents: Array<string> = [];

  components.forEach((comp) => {
    if (!portfolioData[comp]?.content) return;
    else if (!portfolioData[comp].content.length) invalidComponents.push(comp);
    else portfolioData[comp].content.forEach((item: any) => {
      if (!item.validate()) invalidComponents.push(comp);
    });
  });

  if (!Header.validate(portfolioData.header)) invalidComponents.push('header');
  if (!Footer.validate(portfolioData.footer)) invalidComponents.push('footer');

  return invalidComponents;
}