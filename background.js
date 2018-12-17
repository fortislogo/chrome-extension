// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'developer.chrome.com'},
          }),
          new chrome.declarativeContent.PageStateMatcher(
          {
            pageUrl: {hostEquals: 'bitk.local'},
            pageUrl: {hostEquals: 'phpstack-93963-566910.cloudwaysapps.com'}
          }),
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
});

