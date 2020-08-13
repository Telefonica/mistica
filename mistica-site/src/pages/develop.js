import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Easy to Use</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: <>Focus on What Matters</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: <>Powered by React</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      // title={`${siteConfig.title} Design System`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--secondary', styles.heroBanner)}>
        <div className="container">
          <h4>DEVELOP</h4>
          <h1 className="hero__title">Builded for Android, iOS and Web</h1>
          <ul class="cardContainer">
            <li class="card">
            <img src={useBaseUrl('img/android.svg')}/>
              <h2>Android</h2>
              <p>Java, C++ and Kotlin</p>
              <Link
                className={clsx(
                  'button button--secondary button--md  ',
                  styles.getStarted,
                )}
                to={useBaseUrl('https://github.com/Telefonica/mistica-android')}>
                Get started
              </Link>
            </li>
            <li class="card">
            <img src={useBaseUrl('img/ios.svg')}/>
              <h2>iOS</h2>
              <p>Swift & Objective-C</p>
              <Link
                className={clsx(
                  'button button--secondary button--md  ',
                  styles.getStarted,
                )}
                to={useBaseUrl('https://github.com/Telefonica/mistica-ios')}>
                Get started
              </Link>
            </li>
            <li class="card">
              <img src={useBaseUrl('img/react.svg')}/>
              <h2>Web</h2>
              <p>React</p>
              <Link
                className={clsx(
                  'button button--secondary button--md  ',
                  styles.getStarted,
                )}
                to={useBaseUrl('https://github.com/Telefonica/mistica-web')}>
                Get started
              </Link>
            </li>
          </ul>
          {/* <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/design/introduction')}>
              Get started
            </Link>
          </div> */}
        </div>
      </header>

      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                <div class="playroom">
                  <div class="infoModule">
                    <h1>Meets Playroom!</h1>
                    <p>Specify helps you keep the same identity across all the platforms you use. Increase your incomes and speed-up your time to market.</p>
                    <div className={styles.buttons}>
                      <Link
                        className={clsx(
                          'button button--secondary button--lg',
                          styles.getStarted,
                        )}
                        to={useBaseUrl('docs/design/introduction')}>
                        Go to Playroom
                      </Link>
                    </div>
                  </div>
                  <img src={useBaseUrl('img/playroom.png')}/>
                  
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
