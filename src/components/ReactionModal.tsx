interface ReactionModalProps {
  content: string | null;
}

export const ReactionModal = ({ content }: ReactionModalProps) => {
  if (!content) return null;

  return (
    <div className="modal-overlay">
      <img src={content} alt="reaction" />
    </div>
  );
};