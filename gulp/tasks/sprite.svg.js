'use strict';

module.exports = function() {
  $.gulp.task('sprite:svg', function() {
    return $.gulp.src('./source/svg_to_sprite/*.svg')
      .pipe($.gp.svgmin({
        js2svg: {
          pretty: true
        }
      }))
      .pipe($.gp.replace('&gt;', '>'))
      .pipe($.gp.svgSprite({
        mode: {
          symbol: {
            sprite: '../sprite.svg'
          }
        }
      }))
      .pipe($.gp.cheerio({
        run: function ($) {
          // $('[fill]').removeAttr('fill');
          // $('[stroke]').removeAttr('stroke');
          // $('[style]').removeAttr('style');
          // $('style').remove();
          $('svg').attr({'display':'none'});
        },
        parserOptions: { xmlMode: true }
      }))
      .pipe($.gulp.dest('./source/sprite_svg/'))
  })
};
