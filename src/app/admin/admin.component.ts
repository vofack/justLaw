import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SafeUrlPipe } from '../services/safe-url.pipe';
import { AdminDataService } from '../services/admin-data.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, SafeUrlPipe],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminComponent {
  youtubeUrl = '';
  contentText = '';

  constructor(private adminData: AdminDataService) {
    this.adminData.getContent().subscribe(data => {
      if (data) {
        this.youtubeUrl = data.youtubeUrl;
        this.contentText = data.contentText;
      }
    });
  }


  save() {
    const embedUrl = this.convertToEmbedUrl(this.youtubeUrl);
    console.log('Saving:', { youtubeUrl: embedUrl, contentText: this.contentText });

    this.adminData.saveContent({
      youtubeUrl: embedUrl,
      contentText: this.contentText,
    }).then(() => {
      alert('Saved successfully!');
    }).catch((err) => {
      console.error('Error saving:', err);
      alert('Error: ' + err.message);
    });
  }

  reset() {
    this.youtubeUrl = '';
    this.contentText = '';
  }
  

  convertToEmbedUrl(url: string): string {
    if (!url) return '';
  
    const match = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/
    );
  
    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
  }
  
}
