var _ = require('lodash');
var postcss = require('postcss');

// Properties
var mapProperties = {
    'background-color': 'hintergrund-farbe',
    'background-image': 'hintergrund-bild',
    'background-position': 'hintergrund-position',
    'background-repeat': 'hintergrund-wiederholung',
    'background': 'hintergrund',
    'border-bottom-color': 'rahmen-unten-farbe',
    'border-bottom-style': 'rahmen-unten-stil',
    'border-bottom-width': 'rahmen-unten-breite',
    'border-bottom': 'rahmen-unten',
    'border-collapse': 'rahmen-kollaps',
    'border-color': 'rahmen-farbe',
    'border-left-color': 'rahmen-links-farbe',
    'border-left-style': 'rahmen-links-stil',
    'border-left-width': 'rahmen-links-breite',
    'border-left': 'rahmen-links',
    'border-right-color': 'rahmen-rechts-farbe',
    'border-right-style': 'rahmen-rechts-stil',
    'border-right-width': 'rahmen-rechts-breite',
    'border-right': 'rahmen-rechts',
    'border-spacing': 'rahmen-abstand',
    'border-style': 'rahmen-stil',
    'border-top-color': 'rahmen-oben-farbe',
    'border-top-style': 'rahmen-oben-stil',
    'border-top-width': 'rahmen-oben-breite',
    'border-top': 'rahmen-oben',
    'border-width': 'rahmen-breite',
    'border': 'rahmen',
    'bottom': 'unten',
    'color': 'farbe',
    'content': 'inhalt',
    'cursor': 'zeiger',
    'display': 'anzeige',
    'float': 'umlaufen',
    'font-family': 'schrift-familie',
    'font-size': 'schrift-größe',
    'font-style': 'schrift-stil',
    'font-variant': 'schrift-variante',
    'font-weight': 'schrift-gewicht',
    'font': 'schrift',
    'line-height': 'zeilen-höhe',
    'height': 'höhe',
    'left': 'links',
    'letter-spacing': 'zeichen-abstand',
    'list-style': 'listen-stil',
    'margin-bottom': 'außenabstand-unten',
    'margin-left': 'außenabstand-links',
    'margin-right': 'außenabstand-rechts',
    'margin-top': 'außenabstand-oben',
    'margin': 'außenabstand',
    'max-height': 'max-höhe',
    'max-width': 'max-breite',
    'min-height': 'min-höhe',
    'min-width': 'min-breite',
    'outline-color': 'kontur-farbe',
    'outline-style': 'kontur-stil',
    'outline-width': 'kontur-breite',
    'outline': 'kontur',
    'overflow': 'überlauf',
    'overflow-x': 'überlauf-x',
    'overflow-y': 'überlauf-y',
    'padding-bottom': 'innenabstand-unten',
    'padding-left': 'innenabstand-left',
    'padding-right': 'innenabstand-rechts',
    'padding-top': 'innenabstand-oben',
    'padding': 'innenabstand',
    'position': 'position',
    'right': 'rechts',
    'text-shadow': 'text-schatten',
    'transition': 'übergang',
    'vertical-align': 'vertikale-ausrichtung',
    'visibility': 'sichtbarkeit',
    'white-space': 'weißraum',
    'width': 'breite',
    'word-spacing': 'wort-abstand',
    'z-index': 'ebene'
};

// Values
var mapValues = {
    'absolute': 'absolut',
    'auto': 'automatisch',
    'bold': 'dick',
    'fixed': 'fixiert',
    'hidden': 'versteckt',
    'inherit': 'erben',
    'initial': 'initial',
    'italic': 'kursiv',
    'left': 'links',
    'no-repeat': 'nicht-wiederholen',
    'none': 'keines',
    'relative': 'relativ',
    'repeat-x': 'wiederholen-x',
    'repeat-y': 'wiederholen-y',
    'repeat': 'wiederholen',
    'right': 'rechts',
    'solid': 'durchgezogen',
    'static': 'statisch',
    'unset': 'aufheben',
    // Colors
    'black': 'schwarz',
    'blue': 'blau',
    'cyan': 'cyan',
    'gray': 'grau',
    'green': 'grün',
    'orange': 'orange',
    'red': 'rot',
    'white': 'weiß',
    'yellow': 'gelb'
};

module.exports = postcss.plugin('postcss-german-stylesheets', function (opts) {
    opts = opts || {};

    return function (css) {
        css.walkDecls(function transformDecl(decl) {
            // Properties
            _.forEach(mapProperties, function (value, key) {
                decl.prop = decl.prop.replace(value, key);
            });

            // Values
            _.forEach(mapValues, function (value, key) {
                decl.value = decl.value.replace(value, key);
            });

            // Important
            if (decl.value.indexOf('!wichtig') >= 0) {
                decl.value = decl.value.replace(/\s*!wichtig\s*/, '');
                decl.important = true;
            }
        });
    };
});

// Export Properties and Values for testing
module.exports.mapProperties = mapProperties;
module.exports.mapValues = mapValues;
