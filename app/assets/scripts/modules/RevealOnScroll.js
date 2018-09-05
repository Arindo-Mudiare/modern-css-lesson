import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
   constructor (curtag, offset) {
       this.itemsToReveal = curtag;
       this.hideInitially();
       this.offsetPercentage = offset;
       this.createWaypoints();     
   }

   hideInitially() {
       this.itemsToReveal.addClass("reveal-item");
   }

   createWaypoints() {
       var that = this;
      this.itemsToReveal.each(function(){
          var currentItem = this;
          new Waypoint({
              element: currentItem,
              handler: function(){
                  $(currentItem).addClass("reveal-item--is-visible");
              },
              offset: that.offsetPercentage
          });
      });
   }
}

export default RevealOnScroll;