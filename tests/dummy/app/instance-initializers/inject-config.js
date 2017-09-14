import Component from '@ember/component';
import Controller from '@ember/controller';
import { computed } from '@ember/object';
import Mixin from '@ember/object/mixin';
import Route from '@ember/routing/route';
import ENV from 'dummy/config/environment';

const { rootURL } = ENV;

export function initialize(appInstance) {
  let fastbootService = appInstance.lookup('service:fastboot');
  let isFastBoot = fastbootService && fastbootService.get('isFastBoot');

  let baseURL;

  if (isFastBoot) {
    let protocol = fastbootService.get('request.protocol');
    let host = fastbootService.get('request.host');
    baseURL = `${protocol}://${host}`;

  } else {
    let pathArray = window.location.href.split('/');
    baseURL = `${pathArray[0]}//${pathArray[2]}`;

  }

  let URLMixin = Mixin.create({
    baseURL, rootURL
  });

  let RouteURLMixin = Mixin.create({
    routeURL: computed(function() {
      return isFastBoot ?
        `${baseURL}${fastbootService.get('request.path')}` :
        window.location.href;
    })

  });

  Component.reopen(URLMixin);
  Controller.reopen(URLMixin);
  Route.reopen(URLMixin, RouteURLMixin);

}

export default {
  name: 'urls',
  initialize
};
