import { Play, ArrowRight } from 'lucide-react';

const featuredVideo = {
  title: 'Decoding the $3B Acquisition: What Investors Missed',
  duration: '12 min',
  views: '2.4K views',
  thumbnail: null,
};

const recentVideos = [
  {
    title: 'Phase III Risk Factors: A Visual Analysis',
    duration: '8 min',
    views: '1.8K views',
  },
  {
    title: 'Q4 Capital Movement: Where Smart Money Goes',
    duration: '15 min',
    views: '3.1K views',
  },
];

const VideoSection = () => {
  return (
    <section id="video-analysis" className="py-16 lg:py-24 bg-secondary/30">
      <div className="container-main">
        <h2 className="section-title">VIDEO ANALYSIS</h2>
        <div className="section-divider" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured Video */}
          <div className="lg:col-span-2">
            <div className="group cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-primary to-primary/80 relative flex items-center justify-center mb-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
                <span className="text-6xl font-display text-primary-foreground/30">BI</span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary-foreground/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
                    <Play className="w-6 h-6 text-primary-foreground fill-current ml-1" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                {featuredVideo.title}
              </h3>
              
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span>{featuredVideo.duration}</span>
                <span>•</span>
                <span>{featuredVideo.views}</span>
              </div>
            </div>
          </div>
          
          {/* Recent Videos */}
          <div className="space-y-4">
            {recentVideos.map((video) => (
              <div key={video.title} className="group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-primary/80 to-primary/60 relative flex items-center justify-center mb-3 overflow-hidden">
                  <span className="text-3xl font-display text-primary-foreground/30">BI</span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 bg-primary-foreground/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
                      <Play className="w-4 h-4 text-primary-foreground fill-current ml-0.5" />
                    </div>
                  </div>
                </div>
                
                <h4 className="text-sm font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                  {video.title}
                </h4>
                
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{video.duration}</span>
                  <span>•</span>
                  <span>{video.views}</span>
                </div>
              </div>
            ))}
            
            <a 
              href="https://youtube.com/@biointel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="arrow-link mt-4 inline-flex"
            >
              VIEW YOUTUBE CHANNEL
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
