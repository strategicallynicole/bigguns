"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ghostSettingsFields = exports.ghostPageFields = exports.ghostPostFields = exports.ghostAuthorFields = exports.ghostTagFields = void 0;

var _gatsby = require("gatsby");

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    fragment GhostSettingsFields on GhostSettings {\n        title\n        description\n        logo\n        icon\n        cover_image\n        facebook\n        twitter\n        lang\n        timezone\n        codeinjection_head\n        codeinjection_foot\n        codeinjection_styles\n        navigation {\n            label\n            url\n        }\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    fragment GhostPageFields on GhostPage {\n        # Main fields\n        title\n        slug\n        featured\n        feature_image\n        excerpt\n        custom_excerpt\n        visibility\n\n        # Dates formatted\n        created_at_pretty: created_at(formatString: \"DD MMMM, YYYY\")\n        published_at_pretty: published_at(formatString: \"DD MMMM, YYYY\")\n        updated_at_pretty: updated_at(formatString: \"DD MMMM, YYYY\")\n\n        # Dates unformatted\n        created_at\n        published_at\n        updated_at\n\n        # SEO\n        meta_title\n        meta_description\n        og_description\n        og_image\n        og_title\n        twitter_description\n        twitter_image\n        twitter_title\n\n        # Authors\n        authors {\n            name\n            slug\n            bio\n            # email\n            profile_image\n            twitter\n            facebook\n            website\n        }\n        primary_author {\n            name\n            slug\n            bio\n            # email\n            profile_image\n            twitter\n            facebook\n            website\n        }\n\n        # Tags\n        primary_tag {\n            name\n            slug\n            description\n            feature_image\n            meta_description\n            meta_title\n            visibility\n        }\n        tags {\n            name\n            slug\n            description\n            feature_image\n            meta_description\n            meta_title\n            visibility\n        }\n\n        # Content\n        plaintext\n        html\n\n        # Additional fields\n        url\n        canonical_url\n        uuid\n        page\n        codeinjection_foot\n        codeinjection_head\n        codeinjection_styles\n        comment_id\n        reading_time\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    fragment GhostPostFields on GhostPost {\n        # Main fields\n        id\n        title\n        slug\n        featured\n        feature_image\n        excerpt\n        custom_excerpt\n        visibility\n\n        # Dates formatted\n        created_at_pretty: created_at(formatString: \"DD MMMM, YYYY\")\n        published_at_pretty: published_at(formatString: \"DD MMMM, YYYY\")\n        updated_at_pretty: updated_at(formatString: \"DD MMMM, YYYY\")\n\n        # Dates unformatted\n        created_at\n        published_at\n        updated_at\n\n        # SEO\n        meta_title\n        meta_description\n        og_description\n        og_image\n        og_title\n        twitter_description\n        twitter_image\n        twitter_title\n\n        # Authors\n        authors {\n            name\n            slug\n            bio\n            # email\n            profile_image\n            twitter\n            facebook\n            website\n        }\n        primary_author {\n            name\n            slug\n            bio\n            # email\n            profile_image\n            twitter\n            facebook\n            website\n        }\n\n        # Tags\n        primary_tag {\n            name\n            slug\n            description\n            feature_image\n            meta_description\n            meta_title\n            visibility\n        }\n        tags {\n            name\n            slug\n            description\n            feature_image\n            meta_description\n            meta_title\n            visibility\n        }\n\n        # Content\n        plaintext\n        html\n\n        # Additional fields\n        url\n        canonical_url\n        uuid\n        page\n        codeinjection_foot\n        codeinjection_head\n        codeinjection_styles\n        comment_id\n        reading_time\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    fragment GhostAuthorFields on GhostAuthor {\n        slug\n        name\n        bio\n        cover_image\n        profile_image\n        location\n        website\n        twitter\n        facebook\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fragment GhostTagFields on GhostTag {\n        slug\n        name\n        visibility\n        feature_image\n        description\n        meta_title\n        meta_description\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ghostTagFields = (0, _gatsby.graphql)(_templateObject()); // Used for author pages

exports.ghostTagFields = ghostTagFields;
var ghostAuthorFields = (0, _gatsby.graphql)(_templateObject2()); // Used for single posts

exports.ghostAuthorFields = ghostAuthorFields;
var ghostPostFields = (0, _gatsby.graphql)(_templateObject3()); // Used for single pages

exports.ghostPostFields = ghostPostFields;
var ghostPageFields = (0, _gatsby.graphql)(_templateObject4()); // Used for settings

exports.ghostPageFields = ghostPageFields;
var ghostSettingsFields = (0, _gatsby.graphql)(_templateObject5());
exports.ghostSettingsFields = ghostSettingsFields;