export class SimpleScene extends Phaser.Scene {
  preload() {
    this.load.image('cokecan', 'assets/cokecan.png');
    this.load.image('liubeilian', 'assets/liubei.png');
  }

  create() {
    this.add.text(100, 100, '三国脸哈哈哈哈哈哈哈哈哈哈', { fill: '#0f0' });
    this.add.text(100,500,'东汉末年，河北巨鹿人张角起兵反抗朝廷，史称黄金之乱。然而这场动乱，仅仅是乱世的开始。', { fill: '#f00' });

  	    var logo = this.add.image(200, 300, 'liubeilian');

    this.tweens.add({
        targets: logo,
        x: 250,
        duration: 120,
        ease: 'Power2',
        yoyo: true,
        loop: -1
	});
	this.add.text(300,400,'请注意，这绝对是用phaser实现的，绝对不是普通的html');
  	this.add.text(300,450,'因为刘备居然会东岸哈哈哈哈哈哈');
  }
}