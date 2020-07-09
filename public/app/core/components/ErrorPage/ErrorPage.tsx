import React, { PureComponent } from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { NavModel } from '@grafana/data';
import { config } from '@grafana/runtime';
import Page from '../Page/Page';
import { getNavModel } from 'app/core/selectors/navModel';
import { StoreState } from 'app/types';

interface ConnectedProps {
  navModel: NavModel;
}

interface OwnProps {}

type Props = ConnectedProps;

export class ErrorPage extends PureComponent<Props> {
  render() {
    const { navModel } = this.props;
    return (
      <Page navModel={navModel}>
        <Page.Contents>
          <div className="page-container page-body">
            <div className="error-title-container">
              <h1>Oops!</h1>
              <h2>We can't seem to find the page you're looking for.</h2>
              <h6> Error code: 404</h6>
            </div>
            <div className="image-box">
              <img src="public/img/404.svg" width="35%" alt="graph" />
            </div>
            <div className="panel-container error-container">
              <div className="error-row">
                <div>
                  <h2>Sorry for the inconvenience</h2>
                  <p>
                    Please go back to your{' '}
                    <a href={config.appSubUrl} className="error-link">
                      home dashboard
                    </a>{' '}
                    and try again.
                  </p>
                  <p>
                    If the error persists, seek help on the{' '}
                    <a href="https://community.grafana.com" target="_blank" className="error-link">
                      community site
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Page.Contents>
      </Page>
    );
  }
}

const mapStateToProps: MapStateToProps<ConnectedProps, OwnProps, StoreState> = state => {
  return {
    navModel: getNavModel(state.navIndex, 'not-found'),
  };
};

export default connect(mapStateToProps)(ErrorPage);
