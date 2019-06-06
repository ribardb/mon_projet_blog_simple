import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.scss']
})
export class PostlistitemComponent implements OnInit {
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postDate: string;

  constructor() { }

  ngOnInit() {
  }

  getLove() {
    return this.postLoveIts;
  }
  onLike() {
    this.postLoveIts += 1;
  }

  onDislike() {
    this.postLoveIts -= 1;
  }
}
